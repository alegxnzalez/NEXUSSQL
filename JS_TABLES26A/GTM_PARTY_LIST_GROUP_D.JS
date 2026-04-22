// GTM_PARTY_LIST_GROUP_D.js

window.GTM_PARTY_LIST_GROUP_D = {
  "tables": {
    "GTM_PARTY_LIST_GROUP_D": {
      "columns": {
        "GTM_PARTY_LIST_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PARTY_LIST_GROUP"
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT"
},
        "IS_INCLUDED": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "INVOLVED_PARTY_QUAL"
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
      "fk_tables": []
    }
  }
};