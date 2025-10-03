<?php
// Inicia a sessão para podermos guardar os dados das tarefas.
session_start();

// --- CONFIGURAÇÃO INICIAL E CABEÇALHOS (HEADERS) ---
// Define que a resposta da nossa API será sempre em formato JSON.
header("Content-Type: application/json; charset=UTF-8");
// Permite que qualquer domínio acesse nossa API (ótimo para desenvolvimento).
header("Access-Control-Allow-Origin: *");
// Define os métodos HTTP que nossa API aceita.
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Define os cabeçalhos que podem ser enviados na requisição.
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// O navegador às vezes envia uma requisição OPTIONS antes de POST ou PUT.
// Se for o caso, a gente só devolve os cabeçalhos e encerra o script.
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// --- DADOS DE EXEMPLO (GUARDADOS NA SESSÃO) ---
// Se a lista de tarefas ainda não existe na sessão, a gente cria uma de exemplo.
if (!isset($_SESSION['tarefas'])) {
    $_SESSION['tarefas'] = [
        [
            'id' => 1,
            'titulo' => 'Estudar PHP',
            'descricao' => 'Aprender os fundamentos para criar uma API.',
            'concluida' => false
        ],
        [
            'id' => 2,
            'titulo' => 'Ir ao supermercado',
            'descricao' => 'Comprar café, pão e queijo.',
            'concluida' => true
        ]
    ];
    $_SESSION['proximo_id'] = 3;
}

// --- ROTAS (ROTEAMENTO) ---
// Vamos analisar a URL para saber o que o usuário quer fazer.
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

// O recurso principal da nossa API é 'tarefas'. Se a URL não tiver isso, é um erro.
if ($uri[1] !== 'tarefas') {
    http_response_code(404);
    echo json_encode(['erro' => 'Recurso não encontrado']);
    exit();
}

// Verifica se um ID de tarefa foi informado na URL (ex: /tarefas/1)
$tarefa_id = null;
if (isset($uri[2])) {
    $tarefa_id = (int) $uri[2];
}

// Pega o método da requisição (GET, POST, PUT, DELETE)
$metodo = $_SERVER['REQUEST_METHOD'];

// --- LÓGICA PARA CADA MÉTODO HTTP ---
switch ($metodo) {
    case 'GET':
        if ($tarefa_id) {
            // Se tem ID, busca uma tarefa específica
            $tarefa_encontrada = null;
            foreach ($_SESSION['tarefas'] as $tarefa) {
                if ($tarefa['id'] == $tarefa_id) {
                    $tarefa_encontrada = $tarefa;
                    break;
                }
            }
            if ($tarefa_encontrada) {
                echo json_encode(['tarefa' => $tarefa_encontrada]);
            } else {
                http_response_code(404);
                echo json_encode(['erro' => 'Tarefa não encontrada']);
            }
        } else {
            // Se não tem ID, retorna todas as tarefas
            echo json_encode(['tarefas' => $_SESSION['tarefas']]);
        }
        break;

    case 'POST':
        // Criar uma nova tarefa
        $dados = json_decode(file_get_contents("php://input"));
        if (!isset($dados->titulo)) {
            http_response_code(400);
            echo json_encode(['erro' => 'O campo "titulo" é obrigatório']);
            break;
        }
        $nova_tarefa = [
            'id' => $_SESSION['proximo_id'],
            'titulo' => $dados->titulo,
            'descricao' => $dados->descricao ?? "",
            'concluida' => false
        ];
        $_SESSION['tarefas'][] = $nova_tarefa;
        $_SESSION['proximo_id']++;
        http_response_code(201); // 201 = Created (Criado com sucesso)
        echo json_encode(['tarefa' => $nova_tarefa]);
        break;

    case 'PUT':
        // Atualizar uma tarefa existente
        if (!$tarefa_id) {
            http_response_code(400);
            echo json_encode(['erro' => 'ID da tarefa não foi informado']);
            break;
        }
        $dados = json_decode(file_get_contents("php://input"));
        $tarefa_encontrada_idx = -1;
        foreach ($_SESSION['tarefas'] as $key => $tarefa) {
            if ($tarefa['id'] == $tarefa_id) {
                $tarefa_encontrada_idx = $key;
                break;
            }
        }
        if ($tarefa_encontrada_idx !== -1) {
            $_SESSION['tarefas'][$tarefa_encontrada_idx]['titulo'] = $dados->titulo ?? $_SESSION['tarefas'][$tarefa_encontrada_idx]['titulo'];
            $_SESSION['tarefas'][$tarefa_encontrada_idx]['descricao'] = $dados->descricao ?? $_SESSION['tarefas'][$tarefa_encontrada_idx]['descricao'];
            if (isset($dados->concluida)) {
                $_SESSION['tarefas'][$tarefa_encontrada_idx]['concluida'] = $dados->concluida;
            }
            echo json_encode(['tarefa' => $_SESSION['tarefas'][$tarefa_encontrada_idx]]);
        } else {
            http_response_code(404);
            echo json_encode(['erro' => 'Tarefa não encontrada']);
        }
        break;

    case 'DELETE':
        // Apagar uma tarefa
        if (!$tarefa_id) {
            http_response_code(400);
            echo json_encode(['erro' => 'ID da tarefa não foi informado']);
            break;
        }
        $tarefa_encontrada_idx = -1;
        foreach ($_SESSION['tarefas'] as $key => $tarefa) {
            if ($tarefa['id'] == $tarefa_id) {
                $tarefa_encontrada_idx = $key;
                break;
            }
        }
        if ($tarefa_encontrada_idx !== -1) {
            // Remove o elemento do array
            array_splice($_SESSION['tarefas'], $tarefa_encontrada_idx, 1);
            echo json_encode(['resultado' => true]);
        } else {
            http_response_code(404);
            echo json_encode(['erro' => 'Tarefa não encontrada']);
        }
        break;

    default:
        // Se o método não for um dos permitidos
        http_response_code(405);
        echo json_encode(['erro' => 'Método não permitido']);
        break;
}
?>