// CORPORATION.js

window.CORPORATION = {
  "tables": {
    "CORPORATION": {
      "columns": {
        "CORPORATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the GID for the corporation. "
        },
        "CORPORATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the XID for the corporation. "
        },
        "CORPORATION_NAME": {
          "type": "VARCHAR2(360)",
          "nullable": true,
          "info": "Contains the name of the corporation. "
        },
        "IS_DOMAIN_MASTER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Check box field to identify a corporation record as the domain master.  The domain master corporation determines the default involved parties for an order, given the domain of the order. When a shipment is built, it grabs the LOGISTICS involved party from the master corporation for the domain and adds it to the shipment. It also does the same for the order for BILL-TO, LOGISTICS, ORDEROWNER, ORDERSUPPLIER, SHIPPER, CONSIGNEE when the order is created. Also, when trying to get the primary contact for a shipment tender, Oracle Transportation Management looks for a contact that is associated to the master corporation for the domain and the service provider. "
        },
        "IS_SHIPPING_AGENTS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if corporation is active. Used with agents. "
        },
        "IS_ALLOW_HOUSE_COLLECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Allow House Collect check box field is used to indicate whether or not a shipping agent is allowed to handle shipments with COLLECT payment terms.  Note: This check box is used for visibility and is not currently enforced within the base application i.e., this is for information only. "
        },
        "MAX_HOUSE_COLLECT_AMT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If house collection is allowed,  the Max House Collect Amount is used to specify the maximum amount of freight charges that can be collected from the internal bill. "
        },
        "MAX_HOUSE_COLLECT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID that qualifies the  currency for the Max House Collect Amount. "
        },
        "MAX_HOUSE_COLLECT_AMT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Max House Collect Amount in the base currency. "
        },
        "PICKUP_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "The GID for the pickup routing sequence. The Pickup Routing Sequence control the routing sequence; how the system plans the sequence of shipment stops that are built from an order base. "
        },
        "DROPOFF_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "The GID for the dropoff routing sequence. The Dropoff Routing Sequence controls the routing sequence; how the system plans the sequence of shipment stops that are built from an order base. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "CONTACT_CORPORATION",
        "CORPORATION_INVOLVED_PARTY",
        "CORPORATION_PROFILE_DETAIL",
        "LEG",
        "LOCATION_CORPORATION",
        "POWER_UNIT",
        "SHIPMENT",
        "SKU",
        "VAT_PROVINCIAL_REGISTRATION"
      ]
    }
  }
};
