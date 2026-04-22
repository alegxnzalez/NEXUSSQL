// AUTO_GRANTOR.js

window.AUTO_GRANTOR = {
  "tables": {
    "AUTO_GRANTOR": {
      "description": "This lets you specify that the given domain should automatically grant access to a given table set to all new domains that are subsequently created.  The grant_to_subdomain_only column lets you indicate that the automatic grant should apply only to child domains of the grantor domain.",
      "columns": {
        "GRANTOR_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "TABLE_SET": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
},
        "IS_WRITE_ACCESS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "GRANT_TO_SUBDOMAIN_ONLY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY"
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