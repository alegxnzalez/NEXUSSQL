// SPLC.js

window.SPLC = {
  "tables": {
    "SPLC": {
      "description": "The Postal Standard Point Location Code is a code used in Geopolitical numbering systems for locations.",
      "columns": {
        "SPLC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique Postal Standard Point Location Code."
},
        "SPLC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The Postal Standard Point Location Code."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The Description of the Postal Standard Point Location Code."
},
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
},
        "SERVICE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "P",
                    "R",
                    "B"
          ],
          "info": "The Service Type of the Postal Standard Point Location Code. P = Postal, R = Rail, B = Both"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "CITY": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "City."
}
      },
      "fk_tables": [
        "LOCATION",
        "REGION_DETAIL",
        "X_LANE"
]
    }
  }
};