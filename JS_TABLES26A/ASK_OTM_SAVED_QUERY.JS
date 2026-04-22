// ASK_OTM_SAVED_QUERY.js

window.ASK_OTM_SAVED_QUERY = {
  "tables": {
    "ASK_OTM_SAVED_QUERY": {
      "columns": {
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "key_value": true,
          "info": "Gid for the Saved Query. The gid for the migrated data will contain the user id and query name combination."
},
        "SAVED_QUERY_XID": {
          "type": "VARCHAR2(206)",
          "nullable": true,
          "info": "Xid for the Saved Query."
},
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "This is the name of the query class"
},
        "SAVED_QUERY_XML": {
          "type": "CLOB",
          "nullable": true,
          "info": "It can store XML/HTML for content for the saved query. For the migrated data this field can be formed by combining 2 -3 records."
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
        "ASK_OTM_SAVED_QUERY_ACCESS"
]
    }
  }
};