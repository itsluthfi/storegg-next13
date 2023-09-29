interface InputProps {
  label: string;
  type: string;
  id: string;
}

export default function Input(props: InputProps) {
  const { label, type, id, ...nativeProps } = props;

  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={`${type}`}
        className="form-control rounded-pill text-lg"
        id={`${id}`}
        name={`${id}`}
        aria-describedby={`${id}`}
        placeholder={`Enter your ${id}`}
        {...nativeProps}
      />
    </>
  );
}
