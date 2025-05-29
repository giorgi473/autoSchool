import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoadSignsPage from "@/components/modules/RoadSignsPage";
import HomePage from "@/components/modules/HomePage";

export function TabsDemo() {
  return (
    <div className=" container mx-auto w-full">
      <Tabs defaultValue="roadsigns" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="roadsigns">საგზაო ნიშნები</TabsTrigger>
          <TabsTrigger value="home">მთავარი</TabsTrigger>
        </TabsList>
        <TabsContent value="roadsigns">
          <Card>
            <CardContent className="space-y-2">
              <RoadSignsPage />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="home">
          <Card>
            <CardContent className="space-y-2">
              <HomePage />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
