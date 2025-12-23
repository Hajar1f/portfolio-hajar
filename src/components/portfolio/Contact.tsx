import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // <-- pour le message de confirmation

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_tlcl5oa", // Service ID
        "template_70o66g8", // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "s9axvxe--4N82oA04" // Public Key
      );

      toast.success("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true); // <-- active le message de confirmation
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
            {t("contact.title") as string || "Contact"}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle") as string ||
              "N’hésitez pas à me contacter pour toute opportunité ou question"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Coordonnées */}
          <div className="space-y-6">
            <Card className="p-7 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {t("contact.location") as string || "Localisation"}
                  </h3>
                  <p className="text-muted-foreground mt-1">Pau, France</p>
                </div>
              </div>
            </Card>

            <Card className="p-7 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {t("contact.email") as string || "Email"}
                  </h3>
                  <p className="text-muted-foreground mt-1 break-all">
                    elmouatassem2004@gmail.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-7 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {t("contact.phone") as string || "Téléphone"}
                  </h3>
                  <p className="text-muted-foreground mt-1">+33 6 21 07 82 05</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulaire */}
          <Card className="lg:col-span-2 p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <Label htmlFor="name" className="text-base font-semibold">
                  {t("contact.name") as string || "Nom"}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12"
                  placeholder={
                    (t("contact.namePlaceholder") as string) || "Ton prénom"
                  }
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-semibold">
                  {t("contact.email") as string || "Email"}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12"
                  placeholder={
                    (t("contact.emailPlaceholder") as string) ||
                    "ton.email@exemple.com"
                  }
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base font-semibold">
                  {t("contact.message") as string || "Message"}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="mt-2 resize-none"
                  placeholder={
                    (t("contact.messagePlaceholder") as string) ||
                    "Écris ton message ici..."
                  }
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg h-14 shadow-soft"
              >
                {t("contact.send") as string || "Envoyer le message"}
              </Button>
            </form>

            {/* Message de confirmation */}
            {submitted && (
              <p className="mt-4 text-green-600 font-semibold text-center">
                Merci ! Ton message a bien été envoyé.
              </p>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
