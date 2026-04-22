// SHIPMENT_STOP_REFNUM_QUAL.js

window.SHIPMENT_STOP_REFNUM_QUAL = {
  "tables": {
    "SHIPMENT_STOP_REFNUM_QUAL": {
      "columns": {
        "SHIPMENT_STOP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SHIPMENT_STOP_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description of the reference number qualifier. "
        },
        "IS_VISIBLE_IF_MASTER_CARR": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "Identifies whether the reference numbers with this qualifier should display on related shipments.Possible Values are Y/N. "
        },
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "info": "Specifies if the refnum qualifier can exist on the business object multiple times, or is restricted to occur only once and whether the value is allowed to be updated. If the value is MANY, then the object can have multiple values for the same qualifier. If the value is either UPDATE_OK or UPDATE_NOT_OK, then the rule is in effect, meaning only one value is allowed for a given qualifier. In the case of UPDATE_NOT_OK, the value may not be modified. Possible values are: UPDATE_OK/UPDATE_NOT_OK/MANY. "
        },
        "REFNUM_SEQUENCE_NO": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The sequence number for Refnum Qualifier, to determine the sequence of Refnum Qualifiers on the Shipment stop Manager. "
        },
        "IS_REMOVE_ON_SERVPROV_CHANGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "Whether to remove a refnum of this type when a shipment has its servprov changed.Possible Values are Y/N. "
        },
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE",
          "info": "The BN type used to generate a refnum when the refnum field for a record in the corresponding refnum table is not populated."
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
        "SHIPMENT_STOP_REFNUM"
      ]
    }
  }
};
