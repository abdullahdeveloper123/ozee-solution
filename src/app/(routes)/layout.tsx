import PublicLayout from '@/layouts/PublicLayout';

export default function PublicRoutesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PublicLayout>{children}</PublicLayout>;
}
