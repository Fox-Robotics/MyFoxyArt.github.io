export default function UserResume({ name, tag, role, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }  h-screen w-full justify-center md:items-center gap-y-10`}
    >
      <div className="rounded-full">
        <img
          src={require(`../images/users/${tag}.jpg`)}
          width={400}
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col mx-auto items-center md:items-start gap-y-3">
        <h3 className="text-4xl font-semibold text-center md:text-left">
          {name}
        </h3>
        <span className="text-xl">{role}</span>
      </div>
    </div>
  );
}
