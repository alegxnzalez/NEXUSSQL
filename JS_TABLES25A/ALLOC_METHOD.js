// ALLOC_METHOD.js

window.ALLOC_METHOD = {
  "tables": {
    "ALLOC_METHOD": {
      "columns": {
        "ALLOC_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ALLOC_METHOD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "ALLOC_TARGET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ALLOC_TARGET",
          "info": "Identifies to which allocation target object this allocation method can correspond to. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true
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
        "IS_USE_SHIPMENT_SHIP_UNIT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "This flag is used only when alloc_target_gid is ORDER. This is for specifying that we can use Shipment Ship Unit information for calculating the metrics when the shipment ship unit line level metrics are zero. This columns is added for the bug 9203554"
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "ALLOCATION_RULE_DETAIL",
        "ALLOC_METHOD_DETAIL"
      ]
    }
  }
};
