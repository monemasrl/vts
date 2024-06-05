"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "./form.module.scss";

type Tcandidature = {
  titolo: string;
  image: string;
};

function FormLavora({ candidature }: { candidature: Tcandidature[] }) {
  const [nome, setNome] = useState<string>("");
  const [errorNome, setErrorNome] = useState<string>("");
  const [cognome, setCognome] = useState<string>("");
  const [errorCognome, setErrorCognome] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [errorMail, setErrorMail] = useState<string>("");
  const [candidatura, setCandidatura] = useState<string>("");
  const [messaggio, setMessaggio] = useState<string>("");
  const [errorMessaggio, setErrorMessaggio] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function SuccessMessage() {
    return (
      <div className={style.success}>
        <h3>Messaggio inviato</h3>
        <p>Risponderemo al messaggio nel più breve tempo possibile</p>
      </div>
    );
  }

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
  const router = useRouter();

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/formlavora.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
        router.push("/success");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <form
      className={`${style.form} ${style.form__lavora}`}
      name="candidatura"
      onSubmit={handleFormSubmit}
    >
      {/* {status == "ok" && <SuccessMessage />} */}
      <input type="hidden" name="form-name" value="candidatura" />
      <p>
        {" "}
        <label htmlFor="nome">Nome:</label> <br />
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
        {" "}
        <label htmlFor="cognome">Cognome:</label> <br />
        <input
          onChange={(e) => {
            setCognome(e.target.value);
          }}
          type="text"
          name="cognome"
          id="cognome"
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
        <label htmlFor="richiesta">Candidatura</label> <br />
        <select
          name="richiesta"
          id="richiesta"
          className={style.candidatura}
          onChange={(e) => setCandidatura(e.target.value)}
        >
          {candidature.map((item, index) => {
            return (
              <option key={index} value={item.titolo}>
                {item.titolo}
              </option>
            );
          })}
        </select>
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

export default FormLavora;
