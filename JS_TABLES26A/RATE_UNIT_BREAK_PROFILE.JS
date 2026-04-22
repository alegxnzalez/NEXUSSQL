// RATE_UNIT_BREAK_PROFILE.js

window.RATE_UNIT_BREAK_PROFILE = {
  "tables": {
    "RATE_UNIT_BREAK_PROFILE": {
      "columns": {
        "RATE_UNIT_BREAK_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "RATE_UNIT_BREAK_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "RATE_UNIT_BREAK_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "S",
                    "I",
                    "N",
                    "D",
                    "U",
                    "C"
          ],
          "info": "Valid values are S=String, I=Integer, N=Number, D=Date, U=Unit of Measure, C=Currency."
},
        "LOOKUP_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "C",
                    "L",
                    "M"
          ],
          "info": "Valid values are C=Continuous range, L=Lookup exact value."
},
        "UOM_TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": true
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
}
      },
      "fk_tables": [
        "ACCESSORIAL_COST",
        "RATE_GEO_COST",
        "RATE_UNIT_BREAK"
]
    }
  }
};