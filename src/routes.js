import { getSanduiches, getSanduiche, postSanduiche, updateSanduiche, deleteSanduiche} from './Controllers/SanduicheController.js';

import { getBebidas, getBebida, postBebida, updateBebida, deleteBebida} from './Controllers/BebidaController.js';

import { getClientes, getCliente, postCliente, updateCliente, deleteCliente} from './Controllers/ClienteController.js';

import { getPedidos, getPedido, postPedido, updatePedido, deletePedido } from './Controllers/PedidoController.js';

import { getFuncionarios, getFuncionario, postFuncionario, updateFuncionario, deleteFuncionario } from './Controllers/FuncionarioController.js';

import { loginUsers, registerUsers } from './Controllers/UsersController.js'

import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api rodando"
    });
})

router.post('/login', loginUsers)
router.post('/register', registerUsers)

router.get('/sanduiches', getSanduiches);
router.get('/sanduiche', getSanduiche);
router.post('/sanduiche', postSanduiche);
router.put('/sanduiche', updateSanduiche);
router.patch('/sanduiche', updateSanduiche);
router.delete('/sanduiche', deleteSanduiche); 

router.get('/bebidas', getBebidas);
router.get('/bebida', getBebida);
router.post('/bebida', postBebida);
router.put('/bebida', updateBebida);
router.patch('/bebida', updateBebida);
router.delete('/bebida', deleteBebida); 

router.get('/clientes', getClientes); //rota para selecinar dados de vários clientes
router.get('/cliente', getCliente); //rota para selecionar dados de um cliente
router.post('/cliente', postCliente); //rota para adicionar dados de novos clientes
router.put('/cliente', updateCliente); //rota para atualizar dados do cliente
router.patch('/cliente', updateCliente); //rota para atualizar dados do cliente
router.delete('/cliente', deleteCliente); //rota para excluir dados do cliente

router.get('/pedidos', getPedidos); //rota para selecinar dados de vários pedidos
router.get('/pedido', getPedido); //rota para selecionar dados de um pedido
router.post('/pedido', postPedido); //rota para adicionar dados de novo pedido
router.put('/pedido', updatePedido); //rota para atualizar dados do pedido
router.patch('/pedido', updatePedido); //rota para atualizar dados do pedido
router.delete('/pedido', deletePedido); //rota para excluir dados do pedido
 
router.get('/funcionarios', getFuncionarios);
router.get('/funcionario', getFuncionario);
router.post('/funcionario', postFuncionario);
router.patch('/funcionario', updateFuncionario);
router.delete('/funcionario', deleteFuncionario);

export default router; 