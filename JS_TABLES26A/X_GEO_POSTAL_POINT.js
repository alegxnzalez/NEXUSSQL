// X_GEO_POSTAL_POINT.js

window.X_GEO_POSTAL_POINT = {
  "tables": {
    "X_GEO_POSTAL_POINT": {
      "columns": {
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "key_value": true
},
        "START_OFFSET": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "END_OFFSET": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "LAT": {
          "type": "NUMBER",
          "nullable": false
},
        "LON": {
          "type": "NUMBER",
          "nullable": false
},
        "ACCURACY": {
          "type": "NUMBER",
          "nullable": true
},
        "LENGTH": {
          "type": "NUMBER",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};