import Typography from './typography';

export default function Title({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: () => React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center">
      <Typography type="h2">{children}</Typography>
      {action && action()}
    </div>
  );
}
