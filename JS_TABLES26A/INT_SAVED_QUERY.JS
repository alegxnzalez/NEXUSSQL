// INT_SAVED_QUERY.js

window.INT_SAVED_QUERY = {
  "tables": {
    "INT_SAVED_QUERY": {
      "description": "This table stores sql queries used by the gc3 xml integration layer during the 'matching' process. Such queries can be used to correlate a given inbound xml document with a particular business object in the database.",
      "columns": {
        "INT_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This is the integration saved query gid."
},
        "INT_SAVED_QUERY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This is the integration saved query xid."
},
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "This is the name of the query."
},
        "SQL_FIND": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "This is the sql  query statement."
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
        "SQL_ID": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "info": "SQL ID stored after the first time a new or modified integration saved query is run."
},
        "IS_AWR_COLLECTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the integration saved query should be collected in the AWR report regardless of its performance."
}
      },
      "fk_tables": []
    }
  }
};