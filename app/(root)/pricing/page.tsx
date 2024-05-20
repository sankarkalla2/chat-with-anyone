import { pricingCards } from "@/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  return (
    <div>
      <div className="lightmode-bg"></div>
      <div className="dark:darkmode-bg"></div>
      <div className="mt-10">
        <div className="text-center w-full">
          <h2 className="font-bold text-4xl lg:text-6xl tracking-tight">
            Choose your right plan!
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto mt-5 px-2">
            Select from best plan, ensuring a perfect match. Need to more or
            less? Customize your subscription for a seemless fit
          </p>
        </div>
        <div className="w-full flex justify-center mt-8">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Monthly</TabsTrigger>
              <TabsTrigger value="password">Annually</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-10">
              <div>
                {pricingCards.map((card) => (
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <Button variant={"premium"} size="sm">
                          {card.name}
                        </Button>
                      </CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
