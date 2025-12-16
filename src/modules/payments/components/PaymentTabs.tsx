
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
        <div className="flex w-full flex-col gap-6">
            <Tabs defaultValue="crypto-to-cash" className="flex flex-col">
                <TabsList className="rounded-[30px] bg-[#F2F2F2] overflow-hidden p-0 mx-auto">
                    <TabsTrigger
                        value="crypto-to-cash"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-[30px] text-sm leading-sm font-[500] text-[#828282] py-[8px] px-[16px]"
                    >
                        Crypto to cash
                    </TabsTrigger>
                    <TabsTrigger
                        value="cash-to-crypto"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-[30px] text-sm leading-sm font-[500] text-[#828282] py-[8px] px-[16px]"
                    >
                        Cash to crypto
                    </TabsTrigger>
                    <TabsTrigger
                        value="crypto-to-fiat-loan"
                        className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-[30px] text-sm leading-sm font-[500] text-[#828282] py-[8px] px-[16px]"
                    >
                        Crypto to fiat loan
                    </TabsTrigger>
                </TabsList>
                <div className="min-h-[600px]">
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
