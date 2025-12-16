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
                <div className="border border-[#E0E0E0] bg-[#F7F7F7] rounded-[20px] sm:rounded-[30px] px-2 py-1.5 sm:px-[12px] sm:py-[8px] flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0">
                    <img src={selectedCurrency.icon} alt={selectedCurrency.label} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-primary text-xs sm:text-sm font-[400] whitespace-nowrap">{selectedCurrency.label}</span>
                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-[#828282] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-[200px] sm:w-[224px] rounded-[16px] sm:rounded-[20px] px-3 sm:px-[12px] py-3 sm:py-[16px]"
            >
                <div className="relative">
                    <Search className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#828282]" />
                    <input
                        type="text"
                        placeholder="Search currency..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 border border-[#E0E0E0] rounded-[16px] sm:rounded-[20px] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                    />
                </div>
                <div className="max-h-[180px] sm:max-h-[200px] overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <DropdownMenuCheckboxItem
                                key={option.value}
                                checked={option.value === value}
                                onSelect={() => handleSelect(option.value)}
                                className="w-full p-0"
                            >
                                <div className="flex items-center justify-start gap-2 p-2.5 sm:p-[12px]">
                                    {option.icon && (
                                        <img src={option.icon} alt={option.label} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    )}
                                    <span className="text-primary text-xs sm:text-sm font-[400]">{option.label}</span>
                                </div>
                            </DropdownMenuCheckboxItem>
                        ))
                    ) : (
                        <div className="p-2.5 sm:p-[12px] text-xs sm:text-sm text-[#828282] text-center">
                            No currency found
                        </div>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
