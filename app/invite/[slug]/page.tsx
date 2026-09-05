import InviteRedirect from '@/components/invite/InviteRedirect';

interface InvitePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { slug } = await params;

  return <InviteRedirect slug={slug} />;
}
