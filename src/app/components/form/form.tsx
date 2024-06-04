"use client";
import { useState, useEffect } from "react";
import style from "./form.module.scss";
import { useRouter } from "next/navigation";

function Form() {
  const [nome, setNome] = useState<string>("");
  const [errorNome, setErrorNome] = useState<string>("");
  const [cognome, setCognome] = useState<string>("");
  const [errorCognome, setErrorCognome] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [errorMail, setErrorMail] = useState<string>("");
  const [messaggio, setMessaggio] = useState<string>("");
  const [errorMessaggio, setErrorMessaggio] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (nome.length < 3 && nome.length > 0) {
      setErrorNome("Inserire un nome di almeno 6 caratteri");
    } else {
      setErrorNome("");
    }
    if (cognome.length < 3 && cognome.length > 0) {
      setErrorCognome("Inserire un nome di almeno 3 caratteri");
    } else {
      setErrorCognome("");
    }

    if (mail.length < 6 && mail.length > 0) {
      setErrorMail("Inserire un indirizzo mail valido");
    } else if (mail.length > 0 && !mail.includes("@")) {
      setErrorMail("Inserire un indirizzo mail valido");
    } else {
      setErrorMail("");
    }

    if (messaggio.length < 10 && messaggio.length > 0) {
      setErrorMessaggio("Inserire almeno 10 caratteri");
    } else {
      setErrorMessaggio("");
    }

    //controllo sul submit del form netlify
    if (
      nome.length < 3 ||
      cognome.length < 3 ||
      mail.length < 3 ||
      !mail.includes("@") ||
      messaggio.length < 10
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [nome, mail, messaggio, cognome]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then((payload) => {
        console.log(payload);
        router.push("/success");
      })
      .catch((error) => alert(error));
  };
  return (
    <form
      className={`${style.form} ${style.form__lavora}`}
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        {" "}
        <label htmlFor="ragionesociale">Nome:</label> <br />
        <input
          onChange={(e) => {
            setNome(e.target.value);
          }}
          type="text"
          name="nome"
          id="nome"
          required
        />
      </p>
      <p>
        <label htmlFor="ragionesociale">Cognome:</label> <br />
        <input
          onChange={(e) => {
            setCognome(e.target.value);
          }}
          type="text"
          name="nome"
          id="nome"
          required
        />
      </p>
      <p>
        <label htmlFor="youremail">Indirizzo mail:</label> <br />
        <input
          onChange={(e) => setMail(e.target.value)}
          type="email"
          name="email"
          id="youremail"
          required
        />
      </p>

      <p>
        <label htmlFor="yourmessage">Messaggio:</label> <br />
        <textarea
          onChange={(e) => {
            setMessaggio(e.target.value);
          }}
          name="message"
          id="yourmessage"
          required
        ></textarea>
      </p>
      {errorNome && <p className={style.error}>{errorNome}</p>}
      {errorCognome && <p className={style.error}>{errorCognome}</p>}
      {errorMail && <p className={style.error}>{errorMail}</p>}

      {errorMessaggio && <p className={style.error}>{errorMessaggio}</p>}
      <p>
        <button disabled={submit ? false : true} type="submit">
          Invia
        </button>
      </p>
    </form>
  );
}

export default Form;
