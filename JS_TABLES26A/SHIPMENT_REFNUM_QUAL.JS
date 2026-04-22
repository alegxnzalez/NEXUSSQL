// SHIPMENT_REFNUM_QUAL.js

window.SHIPMENT_REFNUM_QUAL = {
  "tables": {
    "SHIPMENT_REFNUM_QUAL": {
      "description": "The master table that stores the descriptions of the qualifiers for the shipment.",
      "columns": {
        "SHIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "SHIPMENT_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "SHIPMENT_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "IS_VISIBLE_IF_MASTER_CARR": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Identifies whether the reference numbers with this qualifier should display on related shipments."
},
        "DEFAULT_REFNUM_BN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BN_TYPE",
          "info": "The BN type used to generate a refnum when the refnum field for a record in the corresponding refnum table is not populated."
},
        "IS_REMOVE_ON_SERVPROV_CHANGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Whether to remove a refnum of this type when a shipment has its servprov changed."
},
        "UPDATE_FLAG": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "values": [
                    "UPDATE_OK",
                    "UPDATE_NOT_OK",
                    "MANY"
          ]
},
        "SHIPMENT_REFNUM_SEQUENCE_NO": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The sequence number for Refnum Qualifier, to determine the sequence of Refnum Qualifiers on the Shipment Manager."
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "APPT_RULE_SET_REFNUM_D",
        "GTM_DT_CONFIG_RULE",
        "IE_SHIPMENT_REFNUM",
        "LINE_APP_TOL_SHIPMENT_REFNUM",
        "MATCH_VALIDATION_RULE_SHIPMENT",
        "ROUTE_TMPLT_LEG_SHIP_COMPAT",
        "SC_COPY_REFNUM_QUAL",
        "SERVPROV_TENDER_REFNUM",
        "SHIPMENT_REFNUM",
        "SHIP_GROUP_RULE"
]
    }
  }
};