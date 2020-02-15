import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();




export const atividadesCriadas = functions.auth.user().onCreate(async (user)=>{
    
    try{
       const Proposta ={
            uid: user.uid,
            compartilhar:false,
            ativo: 'true',
        }
        await admin.firestore()
                    .collection("proposta")
                    .doc()
                    .set(Proposta);
    }catch(error){
        console.log(error);
    }              
});