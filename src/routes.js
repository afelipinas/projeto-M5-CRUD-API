import { Router } from 'express';

import { getSanduiches, getSanduiche, postSanduiche, updateSanduiche, deleteSanduiche} from './Controllers/Sanduiche.js';
import { getClientes, getCliente, postCliente, updateCliente, deleteCliente} from './Controllers/Cliente.js';
import { getPedidos, getPedido, postPedido, updatePedido, deletePedido } from './Controllers/Pedido.js';
import { getFuncionarios, getFuncionario, postFuncionario, updateFuncionario, deleteFuncionario } from './Controllers/funcionario.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api rodando"
    });
})

router.get('/sanduiches', getSanduiches);
router.get('/sanduiche', getSanduiche);
router.post('/sanduiche', postSanduiche);
router.put('/sanduiche', updateSanduiche);
router.patch('/sanduiche', updateSanduiche);
router.delete('/sanduiche', deleteSanduiche); 

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