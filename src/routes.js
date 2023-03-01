import { Router } from 'express'
import { insertPessoa, updatePessoa, selectPessoa, selectPessoas, deletePessoa, loginPessoa} from './Controllers/Pessoa.js';
import { getSanduiches, getSanduiche, postSanduiche, putSanduiche, patchSanduiche, deleteSanduiche} from './Controllers/Sanduiche.js';
import { deleteCliente, insertCliente, selectCliente, selectClientes, updateCliente, patchCliente} from './Controllers/Cliente.js';
import './Controllers/Sanduiche.js'
//import { deletePedido, insertPedido, patchPedido, selectPedido, selectPedidos, updatePedido } from './Controllers/Pedido.js';


const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api rodando"
    })
})

router.get('/sanduiches', getSanduiches);
router.get('/sanduiche', getSanduiche);
router.post('/sanduiche', postSanduiche);
router.put('/sanduiche', putSanduiche);
router.patch('/sanduiche', patchSanduiche);
router.delete('/sanduiche', deleteSanduiche); 

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.patch('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);


router.get('/clientes', selectClientes); //rota para selecinar dados de vários clientes
router.get('/cliente', selectCliente); //rota para selecionar dados de um cliente
router.post('/cliente', insertCliente); //rota para adicionar dados de novos clientes
router.put('/cliente', updateCliente); //rota para atualizar dados do cliente
router.patch('/cliente', patchCliente); //rota para atualizar dados do cliente
router.delete('/cliente', deleteCliente); //rota para excluir dados do cliente

/*
router.get('/pedidos', selectPedidos); //rota para selecinar dados de vários pedido
router.get('/pedido', selectPedido); //rota para selecionar dados de um pedido
router.post('/pedido', insertPedido); //rota para adicionar dados de novo pedido
router.put('/pedido', updatePedido); //rota para atualizar dados do pedido
router.patch('/pedido', patchPedido); //rota para atualizar dados do pedido
router.delete('/pedido', deletePedido); //rota para excluir dados do pedido
*/

router.post('/login', loginPessoa)

export default router; 