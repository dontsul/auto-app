import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import { TextPage } from "@/components/textPage/TextPage";

export default function QuoteRequest() {
  return (
    <main className="container py-16">
      <Title tag="h1" cn="mb-16">
        Quote <span className="text-yellow-500">Request</span>
      </Title>
      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </main>
  );
}
