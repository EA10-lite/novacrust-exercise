import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/modules/core/components/ui/tabs"
import CashToCrypto from "./CashToCrypto"
import CryptoToCash from "./CryptoToCash"

export function PaymentTabs() {
    return (
        <div className="flex w-full flex-col gap-4 sm:gap-6">
            <Tabs defaultValue="crypto-to-cash" className="flex flex-col">
                <TabsList className="rounded-[20px] sm:rounded-[30px] bg-[#F2F2F2] overflow-hidden p-0 mx-auto w-full sm:w-auto">
                    <TabsTrigger
                        value="crypto-to-cash"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-[20px] sm:data-[state=active]:rounded-[30px] text-xs sm:text-sm leading-sm font-[500] text-[#828282] py-[6px] px-[10px] sm:py-[8px] sm:px-[16px] flex-1 sm:flex-none"
                    >
                        <span className="whitespace-nowrap">Crypto to cash</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="cash-to-crypto"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-[20px] sm:data-[state=active]:rounded-[30px] text-xs sm:text-sm leading-sm font-[500] text-[#828282] py-[6px] px-[10px] sm:py-[8px] sm:px-[16px] flex-1 sm:flex-none"
                    >
                        <span className="whitespace-nowrap">Cash to crypto</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="crypto-to-fiat-loan"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-[20px] sm:data-[state=active]:rounded-[30px] text-xs sm:text-sm leading-sm font-[500] text-[#828282] py-[6px] px-[10px] sm:py-[8px] sm:px-[16px] flex-1 sm:flex-none"
                    >
                        <span className="whitespace-nowrap">Crypto to fiat loan</span>
                    </TabsTrigger>
                </TabsList>
                <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[700px]">
                    <TabsContent value="crypto-to-cash" className="mt-0">
                        <CryptoToCash />
                    </TabsContent>
                    <TabsContent value="cash-to-crypto" className="mt-0">
                        <CashToCrypto />
                    </TabsContent>
                    <TabsContent value="crypto-to-fiat-loan" className="mt-0">
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
