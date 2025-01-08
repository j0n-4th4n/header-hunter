class Lang2600:
    def __init__(self):
        self.INC = "2600"     # incrémente
        self.NEXT = "1633"    # décale à droite
        self.PRINT = "900"    # affiche
        self.DOUBLE = "1100"  # double
        
    
    def encode(self, message):
        code = []
        for char in message:
            target = ord(char)
            
            code.append(self.INC)  # 1 = base
            
            current = 1
            code.append(self.DOUBLE)
            while current * 2 <= target:
                code.append(self.DOUBLE)
                current *= 2
            remaining = target - current
            for _ in range(remaining):
                code.append(self.INC)

            code.append(self.PRINT)
            code.append(self.NEXT)
                
        return ' '.join(code)