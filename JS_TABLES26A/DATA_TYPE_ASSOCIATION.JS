// DATA_TYPE_ASSOCIATION.js

window.DATA_TYPE_ASSOCIATION = {
  "tables": {
    "DATA_TYPE_ASSOCIATION": {
      "columns": {
        "DATA_TYPE_ASSOCIATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier of data type association."
},
        "DATA_TYPE_ASSOCIATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Xid of data type association."
},
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Whether the association is the primary association for the from data query type and the to data query type."
},
        "FROM_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "The data query type gid of the from object of the association."
},
        "TO_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "The data query type gid of the to object of the association."
},
        "ASSOCIATION_QUERY": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The sql query that associates the from and to objects."
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
        "JAVA_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JAVA_PLUGIN"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AGENT_ACTION_DETAILS"
]
    }
  }
};