// MONITOR_PROFILE.js

window.MONITOR_PROFILE = {
  "tables": {
    "MONITOR_PROFILE": {
      "columns": {
        "MONITOR_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identier of the monitor profile. "
        },
        "MONITOR_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier for the monitor profile.  It is used to be part of the key for a monitor profile template or monitor profile. "
        },
        "MONITOR_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Text, as entered by the user, for familiar reference. "
        },
        "MONITOR_PROFILE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Null if this is a monitor profile template -or- the global identifier indicating the monitor profile template from which this monitor profile was created. "
        },
        "IS_TEMPLATE": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "True if this is a monitor profile template (default) -or- False if this is a monitor profile. "
        },
        "IS_COMPLETE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "IS_DEACTIVATE_WHEN_COMPLETE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "IS_DELETE_WHEN_COMPLETED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "The unique identifier referring to the data_query_type table to indicate which type of business object (order_base, shipment, order_release, invoice) the monitor_profile is associated.  Note: a Monitor Profile must have a value in this column depending on which value this has, the corresponding column (order_base_gid, shipment_gid, order_release_gid, invoice_gid) must have a value.  Thus, the type limits the type of agents you can use and events you can listen for.  For example, only Shipment events for a shipment data query type."
        },
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
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
        "MONITOR_AGENT"
      ]
    }
  }
};
