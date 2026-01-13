import { useState } from "react";

function App(){

  // CONCEPT: useState (HOOK) pour créer une variable '@' et une fonction pour la changer (setEmail)
  // Au début c'est vide:
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  // cette fonction se déclenche quand on clique sur "Se Connecter"
  const handleSubmit = (e) => {
    e.preventDefault(); // Empeche la page de se recharger (comportement par défaut du HTML)

    // Pour l'instant on affiche juste une alerte pour prouver que ça marche
    alert('Email envoyé: ${email} \nMot de passe : ${password}');
  };

  return(
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <p>BIENVENUE IMANE, On se connecte ?!</p>
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

          <button type="submit" className="login-btn"> SE CONNECTER </button>
        </form>
      </div>
    </div>


  )
}
export default App;