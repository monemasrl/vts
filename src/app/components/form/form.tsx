"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import style from "./form.module.scss";
type Props = {};

function SuccessMessage() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  if (success) {
    return (
      <div className={style.success}>
        <h3>Messaggio inviato</h3>
        <p>Risponderemo al messaggio nel più breve tempo possibile</p>
      </div>
    );
  } else {
    return null;
  }
}

function Form({}: Props) {
  const [ragioneSociale, setRagioneSociale] = useState<string>("");
  const [errorRagioneSociale, setErrorRagioneSociale] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [errorMail, setErrorMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errorPhone, setErrorPhone] = useState<string>("");
  const [messaggio, setMessaggio] = useState<string>("");
  const [errorMessaggio, setErrorMessaggio] = useState<string>("");

  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (ragioneSociale.length < 6 && ragioneSociale.length > 0) {
      setErrorRagioneSociale("Inserire un nome di almeno 6 caratteri");
    } else {
      setErrorRagioneSociale("");
    }

    if (mail.length < 6 && mail.length > 0) {
      setErrorMail("Inserire un indirizzo mail valido");
    } else if (mail.length > 0 && !mail.includes("@")) {
      setErrorMail("Inserire un indirizzo mail valido");
    } else {
      setErrorMail("");
    }

    if (phone.length < 3 && phone.length > 0) {
      setErrorPhone("Inserire un numero di telefono valido");
    } else if (phone.length > 0 && isNaN(phone as any)) {
      setErrorPhone("Inserire un numero di telefono valido");
    } else {
      setErrorPhone("");
    }
    if (messaggio.length < 10 && messaggio.length > 0) {
      setErrorMessaggio("Inserire almeno 10 caratteri");
    } else {
      setErrorMessaggio("");
    }
    console.log(errorPhone);
    //controllo sul submit del form netlify
    if (
      ragioneSociale.length < 3 ||
      mail.length < 3 ||
      !mail.includes("@") ||
      phone.length < 3 ||
      messaggio.length < 10
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [ragioneSociale, mail, phone, messaggio]);

  return (
    <form
      className={style.form}
      name="contact"
      method="POST"
      data-netlify="true"
      action="informazioni/?success=true"
      data-netlify-honeypot="mail-confirm"
    >
      <Suspense>
        <SuccessMessage />
      </Suspense>
      {errorRagioneSociale && (
        <p className={style.error}>{errorRagioneSociale}</p>
      )}
      {errorMail && <p className={style.error}>{errorMail}</p>}
      {errorPhone && <p className={style.error}>{errorPhone}</p>}
      {errorMessaggio && <p className={style.error}>{errorMessaggio}</p>}
      <input type="hidden" name="form-name" value="contact" />
      <p>
        {" "}
        <label htmlFor="ragionesociale">Ragione Sociale:</label> <br />
        <input
          onChange={(e) => {
            setRagioneSociale(e.target.value);
          }}
          type="text"
          name="ragionesociale"
          id="ragionesociale"
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
        <label htmlFor="phone">Telefono</label> <br />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          id="phone"
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
      <p>
        <button disabled={submit ? false : true} type="submit">
          Invia
        </button>
      </p>
      <p hidden>
        <label>
          <input name="mail-confirm" />
        </label>
      </p>
    </form>
  );
}

export default Form;
