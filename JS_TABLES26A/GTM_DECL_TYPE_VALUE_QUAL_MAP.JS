// GTM_DECL_TYPE_VALUE_QUAL_MAP.js

window.GTM_DECL_TYPE_VALUE_QUAL_MAP = {
  "tables": {
    "GTM_DECL_TYPE_VALUE_QUAL_MAP": {
      "columns": {
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
        "GTM_DECLARATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DECLARATION_TYPE",
          "info": "The declaration type GID for which the value qualifiers are configured."
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The value qualifier configured for a declaration type which needs to be rounded."
},
        "ROUNDING_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "I",
                    "F",
                    "C"
          ],
          "info": "The type of rounding that will occur for values corresponding to the value qualifier. Allowed Values: I=round to nearest interval, F=floor, and C=ceiling."
},
        "ROUNDING_INTERVAL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Numbers will be rounded (or truncated) to the nearest increment of this value."
},
        "MINIMUM_THRESHOLD": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This value is considered if the rounded value is less than the minimum threshold."
}
      },
      "fk_tables": []
    }
  }
};