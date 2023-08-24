# synapse-node-api

This is an unofficial API client for Sage Bionetwork's Synapse service. It is
extremely limited in scope currently. Help is welcome to incrementally expand it.

## Usage

### Prerequisites

You must have a Synapse account and have created a Personal Access Token (PAT). It is recommended that you place this in a `.env` file to keep this secure.

### Initialization

```
import SynapseClient from 'synapse-node-api';

const synapse = new SynapseClient(<YOUR_PAT>);

// Example: getting all subdirectories of an entity
synapse.entity.children({parentId: 'syn123456', includeTypes: ['folder']})
```

## Supported Endpoints

- Entity:
  - List Children
  - Get Child
- File:
  - Read contents