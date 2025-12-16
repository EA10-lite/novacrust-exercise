import { useState, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/modules/core/components/ui/dropdown-menu";
import { Search, ChevronDown } from "lucide-react";
import { CURRENCY_OPTIONS } from "../data";


type CurrencyDropdownProps = {
    value?: string;
    onChange?: (value: string) => void;
};

export function CurrencyDropdown({ value, onChange }: CurrencyDropdownProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [open, setOpen] = useState(false);

    const selectedCurrency = useMemo(() => {
        return CURRENCY_OPTIONS.find(option => option.value === value) || CURRENCY_OPTIONS[0];
    }, [value]);

    const filteredOptions = useMemo(() => {
        if (!searchQuery.trim()) return CURRENCY_OPTIONS;
        const query = searchQuery.toLowerCase();
        return CURRENCY_OPTIONS.filter(option =>
            option.label.toLowerCase().includes(query) ||
            option.value.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const handleSelect = (optionValue: string) => {
        onChange?.(optionValue);
        setOpen(false);
        setSearchQuery("");
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <div className="border border-[#E0E0E0] bg-[#F7F7F7] rounded-[30px] px-[12px] py-[8px] flex items-center gap-2 cursor-pointer">
                    <img src={selectedCurrency.icon} alt={selectedCurrency.label} className="w-4 h-4" />
                    <span className="text-primary text-sm font-[400]">{selectedCurrency.label}</span>
                    <ChevronDown className={`w-4 h-4 text-[#828282] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-[224px] rounded-[20px] px-[12px] py-[16px]"
            >
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#828282]" />
                    <input
                        type="text"
                        placeholder="Search currency..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-[#E0E0E0] rounded-[20px] text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                    />
                </div>
                <div className="max-h-[200px] overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <DropdownMenuCheckboxItem
                                key={option.value}
                                checked={option.value === value}
                                onSelect={() => handleSelect(option.value)}
                                className="w-full p-0"
                            >
                                <div className="flex items-center justify-start gap-2 p-[12px]">
                                    {option.icon && (
                                        <img src={option.icon} alt={option.label} className="w-4 h-4" />
                                    )}
                                    <span className="text-primary text-sm font-[400]">{option.label}</span>
                                </div>
                            </DropdownMenuCheckboxItem>
                        ))
                    ) : (
                        <div className="p-[12px] text-sm text-[#828282] text-center">
                            No currency found
                        </div>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
