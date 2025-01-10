#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>


char *my_custom_base64(const uint8_t *data, size_t data_len) {
    if (!data || data_len == 0) {
        return NULL; 
    }

    const char BASE64_ALPHABET[] = "7LtPEyT0m58vXW+/zkAlBDxV9Noh2GcqQwKJbFzCYujr1pInS3U4dM6HsglRfati";

    size_t encoded_len = 4 * ((data_len + 2) / 3); 
    char *encoded = (char *)malloc(encoded_len + 1);
    if (!encoded) {
        return NULL;
    }

    size_t index = 0;
    for (size_t i = 0; i < data_len; i += 3) {
        uint32_t block = (data[i] << 16) & 0xFF0000; 
        if (i + 1 < data_len) {
            block |= (data[i + 1] << 8) & 0x00FF00; 
        }
        if (i + 2 < data_len) {
            block |= data[i + 2] & 0x0000FF;
        }

        encoded[index++] = BASE64_ALPHABET[(block >> 18) & 0x3F];
        encoded[index++] = BASE64_ALPHABET[(block >> 12) & 0x3F];
        encoded[index++] = (i + 1 < data_len) ? BASE64_ALPHABET[(block >> 6) & 0x3F] : '=';
        encoded[index++] = (i + 2 < data_len) ? BASE64_ALPHABET[block & 0x3F] : '=';
    }

    encoded[index] = '\0';
    return encoded;
}



char *to_xor(const uint8_t *data, size_t data_len) {

    char *xored = (char *)malloc(data_len + 1);
    if (!xored) {
        return NULL;
    }

    for (size_t i = 0; i < data_len; i++) {
        xored[i] = data[i] ^ i+1;
    }

    xored[data_len] = '\0';
    return xored;
}

int compare(const char *a) {
    const char *b = "BDDWABLakyGg+Hwl+My1m03KqHMb9H5F";
    for(int i = 0; i < strlen(a); i++) {
        if(a[i] != b[i]) {
            return 0;
        }
    }
    return 1;
}


int main(int argc, char **argv) {
   
    if (argc != 2) {
        printf("Usage: %s <input>\n", argv[0]);
        return 1;
    }

    size_t input_len = strlen(argv[1]);

    if(input_len == 24) {
        char *encoded = to_xor((const uint8_t *)argv[1], input_len);
        encoded = my_custom_base64((const uint8_t *)encoded, strlen(encoded));

        if(compare(encoded) == 1) {
            printf("Bravo !\n");
        } else {
            printf("Dommage !\n");
        }
    }else{
        printf("Dommage !\n");
    }

    return 0;
}