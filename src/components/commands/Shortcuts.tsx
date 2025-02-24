import React from "react";
import { Wrapper } from "../styles/Output.styled";
import styled from "styled-components";

const ShortcutsWrapper = styled.div`
  margin: 0.5rem 0;
`;

const ShortcutItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const Key = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
  background: ${({ theme }) => theme.colors?.body};
  padding: 0.25rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors?.primary};
  border-radius: 4px;
  margin-right: 1rem;
  min-width: 100px;
  text-align: center;
`;

const Description = styled.span`
  color: ${({ theme }) => theme.colors?.text[200]};
`;

const Shortcuts: React.FC = () => {
  const shortcuts = [
    { key: "Tab", description: "Otomatik tamamlama" },
    { key: "Ctrl + L", description: "Terminali temizle" },
    { key: "Ctrl + C", description: "Çalışan komutu iptal et" },
    { key: "↑", description: "Önceki komut" },
    { key: "↓", description: "Sonraki komut" },
    { key: "Ctrl + R", description: "Komut geçmişinde ara" },
    { key: "Ctrl + U", description: "Satırı temizle" },
    { key: "Ctrl + W", description: "Son kelimeyi sil" }
  ];

  return (
    <Wrapper>
      <ShortcutsWrapper>
        {shortcuts.map((shortcut) => (
          <ShortcutItem key={shortcut.key}>
            <Key>{shortcut.key}</Key>
            <Description>{shortcut.description}</Description>
          </ShortcutItem>
        ))}
      </ShortcutsWrapper>
    </Wrapper>
  );
};

export default Shortcuts; 