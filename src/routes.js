import { Router } from 'express'
import { insertPessoa, updatePessoa, selectPessoa, selectPessoas, deletePessoa} from './Controllers/Pessoa.js';
import { getSanduiches, getSanduiche, postSanduiche, putSanduiche, patchSanduiche, deleteSanduiche} from './Controllers/Sanduiche.js';

import './Controllers/Sanduiche.js'

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

export default router; 