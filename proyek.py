def welcome():
    print(f"""
===================  WELCOME TO SKYCAFE   ====================
===================     PLEASE ORDER      ====================
""")

harga   = []
barang  = []
total   = 0

while True:
    print(f"""
    ==================  MENU CAFE   =================
    _________________________________________________
    |               MENU COFFEE & SNACK             |
    _________________________________________________
    |   NO  |       NAMA MENU       |     HARGA     |
    _________________________________________________
    |   1   |       AMERICANO       | Rp. 15.000,00 | 
    |   2   |       CAPPUCCINO      | Rp. 20.000,00 |
    |   3   |       CAFFE LATTE     | Rp. 20.000,00 |
    |   4   |       MOCHACCINO      | Rp. 21.000,00 |
    |   5   |       CARAMEL LATTE   | Rp. 21.000,00 |
    |   6   |       MACCHIATO       | Rp. 20.000,00 |
    |   7   |       PICCOLO         | Rp. 15.000,00 |
    |   8   |       ESPRESSO        | Rp. 12.000,00 |
    |   9   |     VIENNA COFFEE     | Rp. 19.000,00 |
    |   10  |       LONG BLACK      | Rp. 15.000,00 |      
    |   11  |    RED VELVET LATTE   | Rp. 20.000,00 |
    |   12  |       TARO LATTE      | Rp. 20.000,00 |
    |   13  |         TOAST         | Rp. 10.000,00 |
    |   14  |     FRENCH FRIES      | Rp. 10.000,00 |
    |   15  |    GRILLED SAUSAGE    | Rp. 10.000,00 |
    _________________________________________________
    """)

    no = int(input("ENTER THE ORDER NUMBER : "))
    if no == 1:
        barang.append("AMERICANO")
        harga.append(15000)
        total += 15000
    elif no == 2:
        barang.append("CAPPUCCINO")
        harga.append(20000)
        total += 20000
    elif no == 3:
        barang.append("CAFFE LATTE")
        harga.append(21000)
        total += 21000
    elif no == 4:
        barang.append("MOCHACCINO")
        harga.append(20000)
        total += 20000
    elif no == 5:
        barang.append("CARAMEL LATTE")
        harga.append(21000)
        total += 21000
    elif no == 6:
        barang.append("MACCHIATO")
        harga.append(20000)
        total += 20000
    elif no == 7:
        barang.append("PICCOLO")
        harga.append(15000)
        total += 15000
    elif no == 8:
        barang.append("ESPRESSO")
        harga.append(12000)
        total += 12000
    elif no == 9:
        barang.append("VIENNA COFFEE")
        harga.append(19000)
        total += 19000
    elif no == 10:
        barang.append("LONG BLACK")
        harga.append(15000)
        total += 15000
    elif no == 11:
        barang.append("RED VELVET LATTE")
        harga.append(20000)
        total += 20000
    elif no == 12:
        barang.append("TARO LATTE")
        harga.append(20000)
        total += 20000
    elif no == 13:
        barang.append("TOAST")
        harga.append(10000)
        total += 10000
    elif no == 14:
        barang.append("FRENCH FRIES")
        harga.append(10000)
        total += 10000
    elif no == 15:
        barang.append("GRILLED SAUSAGE")
        harga.append(10000)
        total += 10000                                          
    else:
        print("THE ORDER IS NOT ON THE MENU !!!")
    
    pesanan_lain = input("ARE THERE ANY OTHER ORDER ?? \n(y/n)")
    if pesanan_lain == "n":
        print(" ")
        break

print(f"""
ORDER   : {barang}
PRICE   : Rp. {harga}
TOTAL   : Rp. {total}
""")

bayar = int(input("Rp. ")) 
if bayar > total: 
    print("YOUR REFUND :Rp. ",bayar-total)
elif bayar == total:
    print("YOUR MONEY IS RIGHT")
else:
    print("YOUR MONEY IS LESS :Rp. ",bayar-total)

print("==================== THANKS FOR COMING ====================")