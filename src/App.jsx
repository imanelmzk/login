import { useState } from "react";

function App(){

  // CONCEPT: useState (HOOK) pour créer une variable '@' et une fonction pour la changer (setEmail)
  // Au début c'est vide:

  // Les variables d'états (STATE)
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Pour afficher un message à l'utilisateur
  const [attempts, setAttempts] = useState(0); // Compteur de tentatives de connexion

  // On définit le nombre MAX d'essais
  const MAX_ATTEMPTS = 3;

  // cette fonction se déclenche quand on clique sur "Se Connecter"
  const handleSubmit = (e) => {
    e.preventDefault(); // Empeche la page de se recharger (comportement par défaut du HTML)

    // Pour l'instant on affiche juste une alerte pour prouver que ça marche
    // alert('Email envoyé: ${email} \nMot de passe : ${password}');

    // * CONDITION 1: Est ce que l'utilisateur est déja bloqué?
    if(attempts >= MAX_ATTEMPTS){
      setMessage("⛔ Vous avez été bloqué(e) après 3 tentatives infructueuses.");
      return; // On sort de la fonction
    }

    // * Condition 2: Validation simple (ex: mot de passe est court)
    if(password.length < 6){
      setMessage("⚠️ Mot de passe trop court (minimum 6 caractères).");
      return;
    }

    // * SIMULATION DE LOGIN
    if(password === "123456"){
      setMessage("✅ Connexion réussie! Bienvenue.");
      setAttempts(0); // On remet le compteur à zéro si çà marche
      // Ici, normalement, on redirige via la page d'acceuil
    }else{
      const newAttempts = attempts+1;
      setAttempts(newAttempts); // on incrémente le compteur (+1)

      if(newAttempts >= MAX_ATTEMPTS){
        setMessage(" ⛔ Vous avez été bloqué(e) après 3 tentatives infructueuses.");
      }else{
        setMessage(`❌ Échec de la connexion. Il vous reste ${MAX_ATTEMPTS - newAttempts} tentative(s).`);
      }
    }
  };

  return(
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo-title"
          style={{
            color: '#4CAF50',
            fontSize: '89px',
            fontWeight: 'bold'

          }}>
          LOGIN
        </h1>
        <p className="whitespace-pre-line"> BIENVENUE IMANE </p>
        <p className="whitespace-pre-line"> On se Connecte?!!</p>
        <p>Pouvez vous, vous identifiez, s'il vous plait!</p>

        {/*}==============================*/}
        {/* Zone d'affichage des messages conditionnelles */}
        {message &&(
          <div style={{
            marginBottom: '15px',
            padding: '10px',
            borderRadius: '5px',
            // Style différent si bloqué ou simple erreur
            color: attempts >= MAX_ATTEMPTS ? '#721c24' : '#0c5460',
            backgroundColor: attempts >= MAX_ATTEMPTS ? '#f8d7da' : '#d1ecf1',
            border: attempts >= MAX_ATTEMPTS ? '1px solid #f5c6cb' : '1px solid #bee5eb',
          }}>
            {message}
          </div>
        )}
        
        {/*}==============================*/}
        <form onSubmit={handleSubmit}>
        {/*}==============================*/}

          {/* Champ Email */}
          <div className="input-group">
            <label> EMAIL </label>
            <input
              type=""
              placeholder="votre@rmail.com"
              value={email}
              // CONCEPT: onChange capture chaque lettre tapée et met à jour
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Champ Mot de Passe */}
          <div className="input-group">
            <label> MOT DE PASSE </label>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
          type="submit" 
          className="login-btn"
          // On change la couleur du bouton s'il est désactivé
          style={{
            backgroundColor: attempts >= MAX_ATTEMPTS ? '#ccc' : '#4CAF50'}}
            disabled={attempts >= MAX_ATTEMPTS}
          
          > 
            { attempts >= MAX_ATTEMPTS ? 'BLOQUÉ' : 'SE CONNECTER'}
          </button>
        </form>
      </div>
    </div>


  )
}
export default App;