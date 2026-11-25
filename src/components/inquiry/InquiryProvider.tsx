"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface InquiryContextValue {
  isOpen: boolean;
  /** Product id to preselect, if any. */
  productId: string | null;
  openInquiry: (productId?: string) => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);

  const openInquiry = useCallback((id?: string) => {
    setProductId(id ?? null);
    setIsOpen(true);
  }, []);

  const closeInquiry = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo<InquiryContextValue>(
    () => ({ isOpen, productId, openInquiry, closeInquiry }),
    [isOpen, productId, openInquiry, closeInquiry],
  );

  return (
    <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>
  );
}

export function useInquiry(): InquiryContextValue {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
}
