import Link from "next/link";

const ListContact = (params) => {
  return (
    <li className="inline mx-2">
      <Link target="_blank" href={params.url}>
        {params.name}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer id="Footer" className="px-32 items-center w-full">
      <div className="container p-2 text-center">
        <p>
          Design <b>by</b> Mesin Merayap. Created <b>by</b> Abdul Qhodir Zaelany
          <em>{new Date().getFullYear()}</em>
        </p>
        <div>
          <ul>
            <ListContact
              url="https://www.instagram.com/qodirtok/"
              name="Instagram"
            />
            <ListContact url="https://github.com/qodirtok" name="Github" />
            <ListContact url="https://medium.com/@qodirtok" name="Medium" />
            <ListContact
              url="https://www.linkedin.com/in/abdul-qhodir-zaelany-4531641b2/"
              name="LinkedIn"
            />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
