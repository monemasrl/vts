import { useRouter } from "next/navigation";

function Testform() {
  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => router.push("/success"))
      .catch((error) => alert(error));
  };
  return (
    <form
      data-netlify="true"
      name="pizzaOrder"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="pizzaOrder" />
      <label>
        What order did the pizza give to the pineapple?
        <input name="order" type="text" />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Testform;
