// SERVPROV_TENDER_SG_REFNUM.js

window.SERVPROV_TENDER_SG_REFNUM = {
  "tables": {
    "SERVPROV_TENDER_SG_REFNUM": {
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
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SG_SERVPROV",
          "info": "identify the servprov who entered the refnum."
},
        "TENDER_SG_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_GROUP_REFNUM_QUAL"
},
        "TENDER_SG_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false
},
        "TENDER_SG_REFNUM_QUAL_D": {
          "type": "VARCHAR2(256)",
          "nullable": false
},
        "SHIP_GROUP_TENDER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SG_SERVPROV",
          "info": "A unique identifier to identify the ship group tender."
}
      },
      "fk_tables": []
    }
  }
};