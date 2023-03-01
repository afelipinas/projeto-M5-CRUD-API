import { Router } from 'express'
import { getPessoas, getPessoa, postPessoa, updatePessoa, deletePessoa, loginPessoa} from './Controllers/Pessoa.js';
import { getSanduiches, getSanduiche, postSanduiche, updateSanduiche, deleteSanduiche} from './Controllers/Sanduiche.js';
import { getClientes, getCliente, postCliente, updateCliente, deleteCliente} from './Controllers/Cliente.js';
import './Controllers/Sanduiche.js'


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



router.get('/pessoas', getPessoas);
router.get('/pessoa', getPessoa);
router.post('/pessoa', postPessoa);
router.patch('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);
router.post('/login', loginPessoa);

export default router; 