type TTypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'lead'
  | 'small'
  | 'muted';

export default function Typography({
  type,
  classNames,
  children,
}: {
  type?: TTypographyType;
  classNames?: string;
  children: React.ReactNode;
}) {
  switch (type) {
    case 'h1':
      return (
        <h1
          className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${classNames}`}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${classNames}`}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`scroll-m-20 text-2xl font-semibold tracking-tight ${classNames}`}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={`scroll-m-20 text-xl font-semibold tracking-tight ${classNames}`}
        >
          {children}
        </h4>
      );
    case 'lead':
      return (
        <p className={`text-xl text-muted-foreground ${classNames}`}>
          {children}
        </p>
      );
    case 'small':
      return (
        <small className={`text-sm font-medium leading-none ${classNames}`}>
          {children}
        </small>
      );
    case 'muted':
      return (
        <p className={`text-sm text-muted-foreground ${classNames}`}>
          {children}
        </p>
      );
    default:
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
  }
}
