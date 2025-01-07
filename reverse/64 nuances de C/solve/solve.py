import base64

def decode_base(encoded):
    standard_base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    alphabet = "7LtPEyT0m58vXW+/zkAlBDxV9Noh2GcqQwKJbFzCYujr1pInS3U4dM6HsglRfati"
    encoded = encoded.translate(str.maketrans(alphabet, standard_base))

    decoded = base64.b64decode(encoded)
    return decoded


def xor(data):
    result = bytearray()

    for i in range(0, len(data), 1):
        result.append(data[i] ^ i+1) 
    return result


def solve():
    flag = "BDDWABLakyGg+Hwl+My1m03KqHMb9H5F"
    decoded = decode_base(flag)
    xor_result = xor(decoded)
    print(xor_result.decode('latin1'))

solve()