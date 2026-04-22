// IE_SS_MATCH_OBJ_INV_PARTY.js

window.IE_SS_MATCH_OBJ_INV_PARTY = {
  "tables": {
    "IE_SS_MATCH_OBJ_INV_PARTY": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "I_REC_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The record number primary key identifier for the tracking event specified."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The transaction identifier for the shipment involved party matched data of the tracking event."
},
        "MATCH_OBJECT_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The object type that was matched to the involved party. For example, order release, order base, or shipment."
},
        "MATCH_OBJ_INV_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The involved party qualifier for the tracking event."
},
        "MATCH_OBJ_INV_PARTY_CON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "The involved party value for the involved party qualifier on the tracking event."
},
        "COMM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "The communication method used to notify regarding the tracking event."
}
      },
      "fk_tables": []
    }
  }
};