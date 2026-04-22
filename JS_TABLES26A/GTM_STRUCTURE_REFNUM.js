// GTM_STRUCTURE_REFNUM.js

window.GTM_STRUCTURE_REFNUM = {
  "tables": {
    "GTM_STRUCTURE_REFNUM": {
      "description": "GTM_STRUCTURE_REFNUM contains a series of business numbers stored with a trade item structure. These numbers are used to qualify the trade item structure. For example, LOTnumber etc",
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
        "GTM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE",
          "info": "GTM_STRUCTURE_GID contains the unique identifier for the trade item structure."
},
        "GTM_STRUCTURE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_STRUCTURE_REFNUM_QUAL",
          "info": "GTM_STRUCTURE_REFNUM_QUAL_GID contains the unique identifier for the trade item structure refnum qualifer. example LOT ID as the qualifier etc"
},
        "GTM_STRUCTURE_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "GTM_STRUCTURE_REFNUM_VALUE contains the qualfiier value. for example lot number -1456"
}
      },
      "fk_tables": []
    }
  }
};